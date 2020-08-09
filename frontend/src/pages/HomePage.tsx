import React from 'react';

import { AuthActions } from '@/domains/auth';
import { Session } from '@/services';

export default function HomePage() {
  const user = Session.getUser();

  return (
    <section>
      <h1>Привет, {user.name}</h1>
      <div onClick={AuthActions.logout} className="text-primary">
        Выйти
      </div>
    </section>
  );
}
