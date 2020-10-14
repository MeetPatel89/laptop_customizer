import React from 'react';
import TotalCost from './TotalCost';
import ItemCost from './ItemCost';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });


export default class Summary extends React.Component {

    

    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            
            return (
                <ItemCost
                key={featureHash}
                feature={feature}
                name={selectedOption.name}
                cost={USCurrencyFormat.format(selectedOption.cost)}
                
                />
            );
          });
        
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <TotalCost
                selected={this.props.selected}
                />
            </section>
        )
    }
}

