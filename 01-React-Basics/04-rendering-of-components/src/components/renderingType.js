import React, { Component } from 'react'

class MappedRendering extends Component {
    constructor (props) {
        super (props)

        this.state = {
            'persons' : [{
                'id' : 1,
                'name' : 'Person 1',
                'job' : 'Job 1',
                'specialization' : 'React'
            },{
                'id' : 2,
                'name' : 'Person 2',
                'job' : 'Job 2',
                'specialization' : 'Angular'
            },{
                'id' : 3,
                'name' : 'Person 3',
                'job' : 'Job 3',
                'specialization' : 'Vue'
            }]
        }
    }

    render () {
        let personas = this.state.persons.map((person,index)=>(
            <h3 key={index}>
                Hi! This is {person.name}, specializes in {person.specialization} and works for {person.job}
            </h3>
        ));

        return (
            <div>
                {personas}
            </div>
        )
    }
}

export default MappedRendering;