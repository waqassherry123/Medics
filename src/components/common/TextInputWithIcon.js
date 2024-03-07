import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

//utils
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics';

const TextInputWithIcon = ({ icon, placeholder,onChangeText, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <Image source={icon} style={styles.icon} />
      <TextInput
        style={[styles.input, { height: rest.height? rest.height : hp(4)}]}
        placeholder={placeholder}
        placeholderTextColor="gray"
        onChangeText={onChangeText} 
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#A1A8B0',
    backgroundColor: '#E5E7EB',
    borderWidth: 1,
    marginBottom: hp(2),
    padding: wp(3),
    borderRadius: wp(7)
  },
  input: {
    flex: 1,
    height: hp(4),
    fontSize: 16,
    paddingLeft: wp(1),
    color: 'black',
  },
  icon: {
    width: wp(6),
    height: wp(6),
    marginHorizontal: 10,
  },
});

export default TextInputWithIcon;
