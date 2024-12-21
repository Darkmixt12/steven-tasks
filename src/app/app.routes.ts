import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'marcador',
	loadComponent: () =>
		import('./store/marcador/marcador-component/marcador-component.component')
	},
	{
		path: 'componentOne',
	loadComponent: () =>
		import('./store/claudio/component-one/component-one.component')
	},

	{
		path: 'componentTwo',
	loadComponent: () =>
		import('./store/claudio/component-two/component-two.component')
	},

	{
		path: 'componentThree',
	loadComponent: () =>
		import('./store/claudio/component-three/component-three.component')
	},


	{
		path: '**',
		redirectTo: 'componentOne',
		pathMatch: 'full',
	  },
];
