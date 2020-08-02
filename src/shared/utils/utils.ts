import Router from 'next/router';

export const redirectToGenericRoute = (route: string) => Router.push(`/${route}`);
