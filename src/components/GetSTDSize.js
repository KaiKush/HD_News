import {Dimensions} from 'react-native';

const widthPhone = Dimensions.get('window').width;
const widthDesign = 414;

const GetSTDSize = size => {
    return (size / widthDesign) * widthPhone;
};

export default GetSTDSize;
