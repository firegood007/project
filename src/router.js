import hybris from 'components/hybris'
import Vue from 'components/vue'
import Angular from 'components/angular'
import React from 'components/react'
import NotFound from 'components/notFound'
const routes = [
  { path: '/hybris', component: hybris },
  { path: '/vue', component: Vue },
	{ path: '/angular', component: Angular },
	{ path: '/react', component: React },
	{ path: '*', component: NotFound }
]
export default routes
