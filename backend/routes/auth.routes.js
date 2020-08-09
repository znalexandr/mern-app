const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const router = Router();

function createToken(userId) {
  return jwt.sign({ userId }, config.get('jwtSecret'), { expiresIn: '1h' });
}

// /api/auth/register

router.post(
  '/register',
  [
    check('name', 'Обязательное поле name').not().isEmpty(),
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректный данные при регистрации'
        });
      }

      const { name, email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: 'Такой пользователь уже существует' });
      }

      const hashedPassword = await bcrypt.hash(String(password), 12);
      const user = new User({ name, email, password: hashedPassword });

      await user.save();

      const token = createToken(user.id);

      res.status(201).json({
        data: { token: `Bearer ${token}`, id: user.id, email: user.email, name: user.name },
        message: 'Успешная регистрация'
      });
    } catch (e) {
      console.error(e);
      console.log(req);
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
  }
);

// // /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Невалидный email').normalizeEmail().isEmail(),
    check('password', 'Поле пароль должно быть заполнено').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректный данные'
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Неверный логин или пароль, попробуйте снова' });
      }

      const token = createToken(user.id);

      res.json({
        data: { token: `Bearer ${token}`, id: user.id, email: user.email, name: user.name },
        message: 'Успешная авторизация'
      });
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
  }
);

module.exports = router;
