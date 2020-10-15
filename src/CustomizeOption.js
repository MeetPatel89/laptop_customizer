import React from 'react';
// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default class CustomizeOption extends React.Component {
    render() {
        return (
            <div className="feature__item">
            <input
              type="radio"
              id={this.props.id}
              className="feature__option"
              name={this.props.feature}
              checked={this.props.checked}
              onChange={(e) => this.props.updateFeature(this.props.feature, this.props.item)}
            />
            <label htmlFor={this.props.id} className="feature__label">
              {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
            </label>
          </div>
        )
        
    }
}


