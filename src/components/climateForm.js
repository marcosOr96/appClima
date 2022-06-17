import react from 'react';
import { Button, View } from 'react-native';

const ClimateForm = props => {
    return (
        <View className= 'card card-body'>
            <form onSubmit={''}>
                <View className= 'form-group'>
                    <input type='text' name='city' placeholder='city name' 
                    className='gorm-control' autofocus/>
                </View>
                <Button className= 'btn btn-success btn-block'>
                    'Optener Estado del clima'
                </Button>
            </form>
        </View>
    )
}

export default ClimateForm;