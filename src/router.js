import factory from 'components/factory'
import ctrlight from 'components/ctrlight'
import situaton from 'components/situaton'
import group from 'components/group'
import setting from 'components/setting'
import source from 'components/source'
import env from 'components/env'
import power from 'components/power'
import savesource from 'components/savesource'
import NotFound from 'components/notFound'
const routes = [
    { path: '/factory', component: factory },
    { path: '/ctrlight', component: ctrlight },
	{ path: '/situaton', component: situaton },
	{ path: '/group', component: group },
	{ path: '/setting', component: setting },
    { path: '/source', component: source },
	{ path: '/env', component: env },
	{ path: '/power', component: power },
	{ path: '/savesource', component: savesource },
	{ path: '*', component: NotFound }
]
export default routes
