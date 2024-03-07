import { StyleSheet, Text } from "react-native"

// utils
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../../theme/metrics"
import { Component } from "react"

// Components
import * as space from "./Spacer"

export const Title = ({children, ...props}) => {
    return (
      <>
        <Text style={[styles.title, props.style]}>
          {children}
        </Text>
        <space.s1 />
      </>
    )
  }

  const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        lineHeight: hp(3),
        fontWeight: '600',
        height: 'auto',
        color:"#101623",
      },
  })