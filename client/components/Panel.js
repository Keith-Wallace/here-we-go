// DASHBOARD PANEL ============================================================
import React from 'react';
import HotelTile from './HotelTile';
import FlightTile from './FlightTile';

        // <FlightTile flightData={this.props} />

const Panel = React.createClass({
  render() {
    
    console.log('>>>>> PANEL <<<<<');
    console.log('this.props.data.expediaFlightInfo.locationForFlightSearch in panel: ', this.props.data.expediaFlightInfo.locationForFlightSearch);
    // console.log('Flights: ', this.props.expediaFlightInfo);

    return (
      <div className="dashboard-container clearfix">
        <HotelTile hotelData={this.props.data.expediaHotelInfo} />
<<<<<<< b64969dd608a8b2b35b3ac5d375dca4b939dfd4e
<<<<<<< 3c62f89262292adf87239385c89c91f045d76765
        <FlightTile flightData={this.props} />
        { 
          /*
=======

        { /*
>>>>>>> feat(): API request for airport codes receiving data
          <CarRentals/>
          <Activities/>
=======
        <FlightTile flightData={this.props} />
        /*
        <CarRentals/>
        <Activities/>
>>>>>>> chore(git st): merge conflict resolution
          */
      </div>
    );
  }
});

export default Panel;
