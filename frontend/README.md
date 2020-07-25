# Install

> Для локальной разработки без докера нужна нода, https://nodejs.org/en/  
> и yarn  
> `npm install -g yarn@1`

    yarn install

# Development

    yarn dev:<имя стенда>

Стенды:

- branch1
- branch2
- branch3
- branch4
- stage1
- stage2

Чтоб запустить фронт с произвольноым путем к апи:

    yarn start --API_URL=http://path.to/api/

## Запуск дев-сервера без redux devtools

```bash
# bash
NO_REDUX_DEV_TOOLS=1 yarn dev:stage1


# fish
env NO_REDUX_DEV_TOOLS=1 yarn dev:stage1
```