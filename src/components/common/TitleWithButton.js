import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//utils
import { color } from '../../theme/colors';

//components
import { Title } from '../../components/common/Text';



const TitleWithButton = ({ title, onPress, buttonText }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Title>{title}</Title>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ color: color.Primary, fontSize: 14, fontWeight: "400" }}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TitleWithButton;
