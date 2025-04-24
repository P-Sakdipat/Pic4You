import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
}).as('home')

Route.get('/logout','AuthController.logout').as('logout')

Route.group(() => {
  Route.route('/signup',['GET','POST'],'AuthController.signup').as('signup')
  Route.route('/login',['GET','POST'],'AuthController.login').as('login')
  
  Route.get('/google/redirect','AuthController.googleRedirect').as('google.redirect')
  Route.get('/google/callback','AuthController.googleCallback').as('google.callback')
  
  Route.get('/github/redirect','AuthController.githubRedirect').as('github.redirect')
  Route.get('/github/callback','AuthController.githubCallback').as('github.callback')
  
  Route.get('/facebook/redirect', 'AuthController.facebookRedirect').as('facebook.redirect')
  Route.get('/facebook/callback', 'AuthController.facebookCallback').as('facebook.callback')
}).middleware('isGuest')

Route.resource('/profile', 'ProfilesController').only(['show', 'edit', 'update'])

Route.resource('/posts', 'PostsController')

Route.get('/posts/download/:id','PostsController.download').as('posts.download')