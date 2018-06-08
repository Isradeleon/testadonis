'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

// Routes for artists rest api
Route.get('/artists', 'ArtistController.getArtists')
Route.post('/artists', 'ArtistController.createArtist')

Route.get('/artists/:id', 'ArtistController.getArtistById')
Route.put('/artists/:id', 'ArtistController.updateArtist')

Route.delete('/artists/:id', 'ArtistController.deleteArtist')