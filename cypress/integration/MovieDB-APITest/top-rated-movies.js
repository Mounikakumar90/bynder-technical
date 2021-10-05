describe('Top rated movies API test', () => {
    it('GET-Test Success status code',()=>{
        cy.request('GET','https://api.themoviedb.org/3/movie/top_rated?api_key=3bd4f63e10f3484ae7a58bc0e2b32110&language=en-US&page=1').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body).to.have.property('total_pages')
            expect(response.body).to.have.property('total_results')

        })
    })

    it('GET- Verifying result attributes',()=>{
        cy.request('GET','https://api.themoviedb.org/3/movie/top_rated?api_key=3bd4f63e10f3484ae7a58bc0e2b32110&language=en-US&page=1').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.results.forEach(movie => {
                expect(movie).to.have.property('adult')
                expect(movie).to.have.property('genre_ids')
                expect(movie).to.have.property('id')
                expect(movie).to.have.property('original_title')
                expect(movie).to.have.property('original_language')
                expect(movie).to.have.property('title')
                expect(movie).to.have.property('vote_count')
            }))
           
            
        })
    })

  
    it('GET- Verifying result attributes',()=>{
        cy.request('GET','https://api.themoviedb.org/3/movie/top_rated?api_key=3bd4f63e10f3484ae7a58bc0e2b32110&language=en-US&page=1').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.results.filter(movie => {
                return movie.id === 724089
            })[0]).to.have.property('original_title',"Gabriel's Inferno Part II")
                     
        })
    })



    it('GET- Test UnAuthorised status code',()=>{
      cy.request({
                url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=3bd4f63e10f3484ae7a58bc0e2b110&language=en-US&page=1', 
                failOnStatusCode: false 
              }).then((response) => {
                expect(response.status).to.eq(401)
                expect(response.body.status_message).to.eq("Invalid API key: You must be granted a valid key.")
        })
    })

    it('GET- Test Not Found status code',()=>{
        
            cy.request({
                url: 'https://api.themoviedb.org/3/movie/top_rated2?api_key=3bd4f63e10f3484ae7a58bc0e2b32110&language=en-US&page=1', 
                failOnStatusCode: false 
              }).then((response) => {
                expect(response.status).to.eq(404)
                expect(response.body.status_message).to.eq("The resource you requested could not be found.")
        })
    })

    
})