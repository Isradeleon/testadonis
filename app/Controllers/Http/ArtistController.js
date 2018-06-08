'use strict'
const Artist = use('App/Models/Artist')

class ArtistController {
    // post
    async createArtist({request, response}){
        const artistData = request.only(['name','city','genre','albums','is_alive'])
        const artist = await Artist.create(artistData)
        return response.json({ 'CREATED_ARTIST': artist })
    }

    // get
    async getArtists({response}){
        const artists = await Artist.all()
        return response.json(artists)
    }

    // get single
    async getArtistById({response, params}){
        const artist = await Artist.find(params.id)
        return response.json(artist)
    }

    // put
    async updateArtist({request, response, params}){
        const artist = await Artist.find(params.id)
        if(artist){
            const artistData = request.only(['name','city','genre','albums','is_alive'])
            artist.merge(artistData)
            await artist.save()
            return response.json({ 'UPDATED_ARTIST': artist })
        }
        return response.json({})
    }

    // delete
    async deleteArtist({response, params}){
        const artist = await Artist.find(params.id)
        if(artist){
            await artist.delete()
            return response.json({ 'DELETED_ARTIST': artist })
        }
        return response.json({})
    }
}

module.exports = ArtistController
