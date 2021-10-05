describe('Top rated movies API test', () => {
  
/* The POST operation is not being allowed for my API authentication Key so testing only Unauthorised code*/

    it('POST-Test Access denied  status code',()=>{
        

        cy.request({
            method:'POST',
            url: 'https://api.themoviedb.org/3/movie/372058/rating?api_key=3bd4f63e10f3484ae7a58bc0e2b32110', 
            body : {
                "value": "8.5"
            },
            failOnStatusCode: false 
          }).then((response) => {
            expect(response.status).to.eq(401)
               })
})

})