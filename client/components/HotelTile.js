import React from 'react';
import Hotel from './Hotel';

const HotelTile = React.createClass({
  render() {

    console.log('>>>>> HOTEL TILE <<<<<');
<<<<<<< b64969dd608a8b2b35b3ac5d375dca4b939dfd4e
<<<<<<< 3c62f89262292adf87239385c89c91f045d76765
    console.log('Hotel: ', this.props.hotelData);
=======

    console.log('Hotel tile this.props: ', this.props);
>>>>>>> chore(git st): merge conflict resolution

    if(this.props.hotelData.length === 0) {
      return (
        <div className="tile-hotel">
          <Hotel />
        </div>
      );
    } else {
      return (
        <div className="tile-hotel">
          {
            this.props.hotelData.expediaHotelInfo.hotelList.map((hotel) =>
              <Hotel
                key={hotel.hotelId}
                hotelInfo={hotel}
                startDate={this.props.hotelData.startDate}
                endDate={this.props.hotelData.endDate}
              />
            )
          }
        </div>
      );
    }
<<<<<<< b64969dd608a8b2b35b3ac5d375dca4b939dfd4e
=======
    console.log('Hotel tile this.props: ', this.props);
>>>>>>> feat(): API request for airport codes receiving data
    

=======
>>>>>>> chore(git st): merge conflict resolution
  }

});

export default HotelTile;
