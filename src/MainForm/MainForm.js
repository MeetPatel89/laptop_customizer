import React from 'react';
import CustomizeOptionList from '../CusotmizeOptionList/CustomizeOptionList';

export default class MainForm extends React.Component {

    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                
                    <CustomizeOptionList 
                        features={this.props.features}
                        selected={this.props.selected}
                        updateFeature={this.props.updateFeature}
                    />
                
            </form>
        )
    }
}