import React, { Component } from 'react'

export default class ListRenderDemo extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            states : [
                "Alaska",
                "Alabama",
                "Arkansas",
                "American Samoa",
                "Arizona",
                "California",
                "Colorado",
                "Connecticut",
                "District of Columbia",
                "Delaware",
                "Florida",
                "Georgia",
                "Guam",
                "Hawaii",
                "Iowa",
                "Idaho",
                "Illinois",
                "Indiana",
                "Kansas",
                "Kentucky",
                "Louisiana",
                "Massachusetts",
                "Maryland",
                "Maine",
                "Michigan",
                "Minnesota",
                "Missouri",
                "Mississippi",
                "Montana",
                "North Carolina",
                " North Dakota",
                "Nebraska",
                "New Hampshire",
                "New Jersey",
                "New Mexico",
                "Nevada",
                "New York",
                "Ohio",
                "Oklahoma",
                "Oregon",
                "Pennsylvania",
                "Puerto Rico",
                "Rhode Island",
                "South Carolina",
                "South Dakota",
                "Tennessee",
                "Texas",
                "Utah",
                "Virginia",
                "Virgin Islands",
                "Vermont",
                "Washington",
                "Wisconsin",
                "West Virginia",
                "Wyoming"
            ]
        }
    }

    render() {

        const style = {
            padding:"5px"
        }

        return (
            <div>
                {
                    this.state.states.map(
                        (element, index) => <h3 style={style}>{index+1}.{element}</h3>
                    )
                }
            </div>
        )
    }
}
