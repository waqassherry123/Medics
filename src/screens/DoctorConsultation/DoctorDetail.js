import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, {useState, useRef, useEffect} from 'react'

//packages
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

//components
import Header from '../../components/common/Header'
import { Title } from '../../components/common/Text';

//utils
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'
import { color } from '../../theme/colors'
import * as space from '../../components/common/Spacer'
import * as images from '../../assets/images/index'
import Button from '../../components/common/Button';

const DoctorDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params.item
    const flatListRef = useRef();

    // Get the current month
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getDate();
    const hours = [ '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '2:00 PM', '03:00 PM', '04:00 PM', '07:00 PM', '08:00 PM' ];

    // Get the number of days in the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // States
    const [showFullText, setShowFullText] = useState(false);
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [monthDates, setMonthDates] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);

    useEffect(() => {
        const index = monthDates.findIndex(date => date.getDate() === selectedDate.getDate());

        if (index !== -1) {
            flatListRef.current.scrollToIndex({ animated: true, index });
        } else {
            flatListRef.current.scrollToIndex({ animated: true, index: 0 });
        }
    }, [selectedDate]);

    // methods
    const toggleTextDisplay = () => {
        setShowFullText(!showFullText);
    };

    const getMonthDates = () => {
        for (let i = 1; i <= daysInMonth; i++) {
            monthDates.push(new Date(currentYear, currentMonth, i));
        }
        return monthDates;
    };

    const renderDateItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.dateContainer, item.getDate() === selectedDate?.getDate() && styles.selectedDate]}
            onPress={() => setSelectedDate(item)}
        >
            <Text style={[styles.dayText, item.getDate() === selectedDate?.getDate() && { color: color.White }]}>{item.toString().substring(0, 3)}</Text>
            <Text style={[styles.dateText, item.getDate() === selectedDate?.getDate() && { color: color.White }]}>{item.getDate()}</Text>
        </TouchableOpacity>
    );

    const renderAppointmentHour = (hour) => {
        return (
            <TouchableOpacity
                key={hour}
                onPress={() => handleTimeSelection(hour)}
                style={[styles.button, selectedTime === hour && { backgroundColor: color.Primary }]}
            >
                <Text style={[styles.buttonText, selectedTime == hour && { fontSize: 14, fontWeight: "800", color: color.White }]}>{hour}</Text>
            </TouchableOpacity>
        );
    };

    const handleTimeSelection = (time) => {
        setSelectedTime(time);
    };

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = selectedDate.toLocaleDateString('en-US', options);

  return (
      <SafeAreaView>
          <View style={{ paddingHorizontal: wp(5), paddingVertical: hp(1) }}>
              <Header title="Doctor Detail" />
              <space.s3 />
              <View style={styles.card}>
                  <Image source={item?.image} style={styles.image} />
                  <View style={styles.content}>
                      <Text style={styles.docName}>{item?.docName}</Text>
                      <Text style={styles.field}>{item?.field}</Text>
                      <View>
                          <View style={styles.ratingContainer}>
                              <Image source={images.Star} />
                              <Text style={styles.rating}>{item?.rating}</Text>
                          </View>
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(1) }}>
                              <Image source={images.Location} style={{ width: wp(4), height: wp(4), marginRight: wp(0.5) }} />
                              <Text style={styles.distance}> {item.distance} away</Text>
                          </View>
                      </View>
                  </View>
              </View>
              <space.s3 />

              {/* About */}
              <Title>About</Title>
              <space.s0 />
              <Text numberOfLines={showFullText ? undefined : 3} style={styles.about}>
                  {item.about}
              </Text>
              {!showFullText && (
                  <TouchableOpacity onPress={toggleTextDisplay}>
                      <Text style={{ color: color.Primary, fontSize: 14, fontWeight: "500", marginTop: hp(0.3) }}>Read More</Text>
                  </TouchableOpacity>
              )}
              {showFullText && (
                  <TouchableOpacity onPress={toggleTextDisplay}>
                      <Text style={{ color: color.Primary }}>Read Less</Text>
                  </TouchableOpacity>
              )}
              <space.s2 />

              {/* Calender */}
              <FlatList
                  ref={flatListRef}
                  data={getMonthDates()}
                  renderItem={renderDateItem}
                  keyExtractor={(item, index) => index.toString()}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  onScrollToIndexFailed={(info) => {
                      const wait = new Promise((resolve) => setTimeout(resolve, 500));
                      wait.then(() => {
                          flatListRef.current?.scrollToIndex({
                              index: info.index,
                              animated: true,
                          });
                      });
                  }}
              />

              {/* hours buttons */}
              <View style={styles.timeContainer}>
                  {hours.map((hour) => renderAppointmentHour(hour))}
              </View>
              <space.s5 />

              <View style={{flexDirection:'row', justifyContent: "space-between"}}>
                  <View style={{ padding: wp(4), backgroundColor:"rgba(25, 154, 142, 0.2)", borderRadius: wp(4) }}>
                      <Image source={images.Chat} />
                  </View>
                  <Button title="Book Apointment" background={color.Primary} width={wp(70)} onPress={() => navigation.navigate("Appointment", {item: item, Date: formattedDate, Time: selectedTime})} />
              </View>
            
          </View>
      </SafeAreaView>
  )
}

export default DoctorDetail

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
    },
    image: {
        width: wp(25),
        height: wp(25),
        borderRadius:wp(2),
        marginRight: wp(3),
    },
    content: {
        // padding: 10,
    },
    docName: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.7,
        marginBottom: hp(0.2)
    },
    field: {
        fontSize: 12,
        color: '#ADADAD',
    },
    ratingContainer: { 
        flexDirection: 'row',
        justifyContent:"space-between", 
        alignItems:'center', 
        backgroundColor: "rgba(25, 154, 142, 0.1)",  
        width: wp(11),
        height: hp(2.8),
        paddingHorizontal: wp(1),
        borderRadius: wp(1),
        marginTop: hp(1),
    },
    rating: {
        fontSize: 14,
        color: color.Primary,
        marginLeft: wp(1),
    },
    distance: {
        fontSize: 14,
        color: '#ADADAD',
    },
    about: {
        color: "#717784",
        lineHeight: 20,
        fontSize: 14,
        fontWeight: "300",
        letterSpacing: 0.7,
        paddingRight: wp(2)
    },
    dateContainer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 60,
        height: hp(9),
        margin: wp(1.3),
        borderRadius: wp(2),
        borderWidth: 1,
        borderColor: 'lightgray',
      },
      selectedDate: {
        backgroundColor: color.Primary,
      },
      dateText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight:"700",
      },
      selectedDateText: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
      },
      dayText: {
        fontSize: 14,
        color: color.Secondary,
      },
      selectedDateText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight:"700",
      },
      timeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: hp(2),
      },
      button: {
        width: '31%', 
        marginVertical: wp(2.5),
        padding: 17,
        borderRadius: wp(4),
        alignItems: 'center',
        borderColor: color.Primary,
        borderWidth: 1,
      },
      buttonText: {
        fontSize: 13,
        fontWeight: '300',
      },
})