import React from 'react';
import CustomizeOption from '../CustomizeOption/CustomizeOption';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';



export default class CustomizeOptionList extends React.Component {

    render() {

        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <CustomizeOption
                id={itemHash}
                feature={slugify(feature)}
                checked={item.name === this.props.selected[feature].name}
                key={itemHash}
                item={item}
                updateFeature={this.props.updateFeature}
                />
              );
            });
      
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
              </fieldset>
            );
          });
        return (
            
            <div className="customize-options-list">
              {features}
            </div>
            
          
        )
    }
}

