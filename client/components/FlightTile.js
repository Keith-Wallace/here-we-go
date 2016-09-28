// DASHBOARD > PANEL > FLIGHT TILE ============================================
import React from 'react';
import Flight from './Flight';
import ValidCodes from '../data/validFlightCodes';
import ValidAirports from '../data/validAirports'
import {ButtonToolbar} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';


const FlightTile = React.createClass({
  getInitialState: function() {
   return {
      airportDepartureCode: "",
      airportDestinationCode: "",
      availableAirportCodes: [],
      adults: 1,
      childUnder18: 0,
      infants: "false"
    }
  },

<<<<<<< 1ad00f266aa9635b106c9326d23289d66aded78e
  getAllAirports(ValidCodes) {
    // if(this.props.flightData.data.expediaFlightInfo.length !== 0) {
=======
  getAllAirports(ValidCodes){
    // if(this.props.flightData.data.expediaFlightInfo.expediaFlightInfo !== undefined) {
<<<<<<< HEAD
>>>>>>> feat(flights): Flights now submitting expedia API request
=======
>>>>>>> 1ba20946ac23cc10976fc963e28664c03715bfcd
    //   let codes = [];

    //   this.props.flightData.data.expediaFlightInfo.expediaFlightInfo.response.airports_by_cities.forEach(function(airport){
    //     if(ValidCodes.indexOf(airport.code) !== -1){
    //       codes.push(airport);
    //     }
    //   });

    //   this.props.flightData.data.expediaFlightInfo.expediaFlightInfo.response.airports.forEach(function(airport){
<<<<<<< HEAD
<<<<<<< 1ad00f266aa9635b106c9326d23289d66aded78e
    //     if(ValidCodes.indexOf(airport.code) !== -1){
    //       codes.push(airport);
    //     }
    //   });

    //   return codes
    // }
    let codes = {
       "processingDurationMillis": 2,
       "authorisedAPI": true,
       "success": true,
       "airline": null,
       "errorMessage": null,
       "airports": [
         {
           "code": "DAL",
           "name": "Dallas Love Fld",
           "city": "Dallas",
           "country": "United States",
           "timezone": "America/Chicago",
           "lat": 32.847111,
           "lng": -96.851778,
           "terminal": null,
           "gate": null
         },
         {
           "code": "DFW",
           "name": "Dallas Fort Worth Intl",
           "city": "Dallas-Fort Worth",
           "country": "United States",
           "timezone": "America/Chicago",
           "lat": 32.896828,
           "lng": -97.037997,
           "terminal": null,
           "gate": null
         }
       ]
     }
     return codes.airports
  },

  componentDidMount() {
    // console.log('IM IN!');
    // $('#prefetch .typeahead').on('focusout', function() {
    //   console.log('type!');
    // });

    var countries = new Bloodhound({
=======
    //     if(ValidCodes.indexOf(airport.code) !== -1 && codes.indexOf(airport) === -1){
    //       codes.push(airport);
    //     }
    //   });

    //   return codes
    // }

    let codes = {
      "processingDurationMillis": 2,
      "authorisedAPI": true,
      "success": true,
      "airline": null,
      "errorMessage": null,
      "airports": [
        {
          "code": "DAL",
          "name": "Dallas Love Fld",
          "city": "Dallas",
          "country": "United States",
          "timezone": "America/Chicago",
          "lat": 32.847111,
          "lng": -96.851778,
          "terminal": null,
          "gate": null
        },
        {
          "code": "DFW",
          "name": "Dallas Fort Worth Intl",
          "city": "Dallas-Fort Worth",
          "country": "United States",
          "timezone": "America/Chicago",
          "lat": 32.896828,
          "lng": -97.037997,
          "terminal": null,
          "gate": null
        }
      ]
    }
    return codes.airports
  },

  componentDidMount() {
    var airports = new Bloodhound({
>>>>>>> feat(flights): Flights now submitting expedia API request
=======
    //     if(ValidCodes.indexOf(airport.code) !== -1 && codes.indexOf(airport) === -1){
    //       codes.push(airport);
    //     }
    //   });

    //   return codes
    // }

    let codes = {
      "processingDurationMillis": 2,
      "authorisedAPI": true,
      "success": true,
      "airline": null,
      "errorMessage": null,
      "airports": [
        {
          "code": "DAL",
          "name": "Dallas Love Fld",
          "city": "Dallas",
          "country": "United States",
          "timezone": "America/Chicago",
          "lat": 32.847111,
          "lng": -96.851778,
          "terminal": null,
          "gate": null
        },
        {
          "code": "DFW",
          "name": "Dallas Fort Worth Intl",
          "city": "Dallas-Fort Worth",
          "country": "United States",
          "timezone": "America/Chicago",
          "lat": 32.896828,
          "lng": -97.037997,
          "terminal": null,
          "gate": null
        }
      ]
    }
    return codes.airports
  },

  componentDidMount() {
    var airports = new Bloodhound({
>>>>>>> 1ba20946ac23cc10976fc963e28664c03715bfcd
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      // url points to a json file that contains an array of country names, see
      // https://github.com/twitter/typeahead.js/blob/gh-pages/data/airports.json
      prefetch: '../data/airports.json'
    });

    // passing in "null" for the "options" arguments will result in the default
    // options being used
    $('#prefetch .typeahead').typeahead(null, {
      name: 'airports',
      source: airports
    }).on('typeahead:change', this.handleChangeDeparture)
  },

  componentWillMount(){
    let codeArr = this.getAllAirports(ValidCodes) || [];
    this.setState({
      availableAirportCodes: codeArr,
      // airportDepartureSelect: 'My Departure Airport',
      airportDepartureCode: "",
      // airportDestinationSelect: codeArr[0].name,
      airportDestinationCode: codeArr[0].code
    })
  },

  handleChangeDestination(event) {
    this.setState({
      airportDestinationCode: event.target.value
    });
  },

  handleChangeDeparture(event) {
    let code = "";
    ValidAirports.forEach(function(airport){
      if (airport.name === event.target.value){
        code = airport.code;
      }
    })
    this.setState({
      airportDepartureCode: code

    });
  },

  handleChangeAdults(event) {
    console.log('changing adults!', event.target.value)
    this.setState({
      // airportDestinationSelect: event.target.value,
      adults: +event.target.value
<<<<<<< HEAD
    });
  },

  handleChangechildUnder18(event) {
    console.log('changing childUnder18!', event.target.value)
    if(event.target.value === "true"){
      this.setState({
        // airportDestinationSelect: event.target.value,
        childUnder18: 1
      });
    } else if(event.target.value === "false"){
      this.setState({
        // airportDestinationSelect: event.target.value,
        childUnder18: 0
      });
    }
  },

  handleChangeInfants(event) {
    console.log('changing infants!', event.target.value)
    this.setState({
      // airportDestinationSelect: event.target.value,
      infants: event.target.value
    });
  },

=======
    });
  },

  handleChangechildUnder18(event) {
    console.log('changing childUnder18!', event.target.value)
    if(event.target.value === "true"){
      this.setState({
        // airportDestinationSelect: event.target.value,
        childUnder18: 1
      });
    } else if(event.target.value === "false"){
      this.setState({
        // airportDestinationSelect: event.target.value,
        childUnder18: 0
      });
    }
  },

  handleChangeInfants(event) {
    console.log('changing infants!', event.target.value)
    this.setState({
      // airportDestinationSelect: event.target.value,
      infants: event.target.value
    });
  },

>>>>>>> 1ba20946ac23cc10976fc963e28664c03715bfcd
  onSubmit(e) {
    e.preventDefault();
    console.log(e);
    // console.log('departure code:',this.state.airportDepartureCode, '| destination code:', this.state.airportDestinationCode, '| startDate: ',this.props.flightData.data.expediaHotelInfo.startDate,'| endDate: ', this.props.flightData.data.expediaHotelInfo.startDate)
    this.props.flightData.data.postFlightExpedia(this.state.airportDepartureCode, this.state.airportDestinationCode, this.props.flightData.data.expediaHotelInfo.startDate, this.props.flightData.data.expediaHotelInfo.endDate, this.state.adults, this.state.childUnder18, this.state.infants)
  },

  render() {

    console.log('>>>>> FLIGHT TILE <<<<<');
<<<<<<< HEAD
<<<<<<< 1ad00f266aa9635b106c9326d23289d66aded78e
    // console.log('Flight this.props in flightTile: ', this.props);

    if(this.props.flightData.data.expediaFlightInfo.length !== 0) {
      let codes = this.getAllAirports(ValidCodes);
      if(codes.length > 0) {
=======
=======
>>>>>>> 1ba20946ac23cc10976fc963e28664c03715bfcd
    console.log('Flight this.props in flightTile: ', this.props);
      
      // let codes = this.getAllAirports(ValidCodes);
      if(this.state.availableAirportCodes.length > 0){
<<<<<<< HEAD
>>>>>>> feat(flights): Flights now submitting expedia API request
=======
>>>>>>> 1ba20946ac23cc10976fc963e28664c03715bfcd
        return (
          <div className="tile-flight">
            <form className="airportForm" onSubmit={this.onSubmit}>
            <h3>Choose your departure and destination airports</h3>
            <div id="prefetch">
<<<<<<< HEAD
<<<<<<< 1ad00f266aa9635b106c9326d23289d66aded78e
              <label>Airport: </label>
              <input className="typeahead" />
            </div>
            {
              codes.map((airport, i) =>
                <Flight
                  key={i}
                  destAirportCode={airport.code}
                  destAirportName={airport.name}
                />
              )
            }
          </div>
=======
              <label htmlFor="depart">Departure Airport: </label>
              <input value={this.props.airportDepartureCode} className="typeahead" ref="depart"/>
            </div>
            <div>
                <label htmlFor="destination">Destination Airport: </label>
                <select ref="destination" value={this.props.airportDestinationCode} onChange={this.handleChangeDestination}>
                  {this.state.availableAirportCodes.map((airport, i) => 
                    <option key={airport.code} value={airport.code}>{airport.name}: {airport.code}</option>
                  )}
                </select>
            </div>

            <div>
              <label htmlFor="adults">Number of Adults: </label>
              <input value={this.props.adults} ref="adults" onChange={this.handleChangeAdults}/>
            </div>
            <div>
              <label htmlFor="childUnder18">Child traveling? </label>
              <select ref="childUnder18" value={this.props.childUnder18} onChange={this.handleChangechildUnder18}>
                  <option key="false" value="false">No</option>
                  <option key="true" value="true">Yes</option>
              </select>            
            </div>
            <div>
              <label htmlFor="infants">Infant on Lap? </label>

              <select ref="infants" value={this.props.infants} onChange={this.handleChangeInfants}>
                  <option key="false" value="false">No</option>
                  <option key="true" value="true">Yes</option>
              </select> 
            </div>
              <button type="submit">Let's Fly!</button>
              </form>
            </div>
>>>>>>> feat(flights): Flights now submitting expedia API request
=======
              <label htmlFor="depart">Departure Airport: </label>
              <input value={this.props.airportDepartureCode} className="typeahead" ref="depart"/>
            </div>
            <div>
                <label htmlFor="destination">Destination Airport: </label>
                <select ref="destination" value={this.props.airportDestinationCode} onChange={this.handleChangeDestination}>
                  {this.state.availableAirportCodes.map((airport, i) => 
                    <option key={airport.code} value={airport.code}>{airport.name}: {airport.code}</option>
                  )}
                </select>
            </div>

            <div>
              <label htmlFor="adults">Number of Adults: </label>
              <input value={this.props.adults} ref="adults" onChange={this.handleChangeAdults}/>
            </div>
            <div>
              <label htmlFor="childUnder18">Child traveling? </label>
              <select ref="childUnder18" value={this.props.childUnder18} onChange={this.handleChangechildUnder18}>
                  <option key="false" value="false">No</option>
                  <option key="true" value="true">Yes</option>
              </select>            
            </div>
            <div>
              <label htmlFor="infants">Infant on Lap? </label>

              <select ref="infants" value={this.props.infants} onChange={this.handleChangeInfants}>
                  <option key="false" value="false">No</option>
                  <option key="true" value="true">Yes</option>
              </select> 
            </div>
              <button type="submit">Let's Fly!</button>
              </form>
            </div>
>>>>>>> 1ba20946ac23cc10976fc963e28664c03715bfcd
        );
      }
    } else {
      return (
        <div className="tile-flight">
          <Flight />
        </div>
      );
    }
<<<<<<< HEAD
<<<<<<< 1ad00f266aa9635b106c9326d23289d66aded78e
  } 
=======

>>>>>>> feat(flights): Flights now submitting expedia API request
=======

>>>>>>> 1ba20946ac23cc10976fc963e28664c03715bfcd
});

export default FlightTile;
