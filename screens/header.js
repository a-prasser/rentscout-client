import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../style/styles';


/**
 * Header component for the application.
 * Renders different content based on the current route.
 *
 * @param {{ title: any; }} param0
 * @param {*} param0.title
 * @returns
 */
const Header = ({ title }) => {
  const navigation = useNavigation();
  const route = useRoute();

  
  /** Navigate to a Help screen or show a help modal */
  const handleHelpPress = () => {
    navigation.navigate('Help'); // You'll need to create this screen
  };

  
  /**
   * renderHeaderContent
   * Renders the appropriate content based on the current route.
   *
   * @returns {*}
   */
  const renderHeaderContent = () => {
    switch (route.name) {
      case 'Properties':
        return (
          <>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Favorites')} 
              style={styles.favoriteButtonProperties}
            >
              <Text style={styles.favoriteButtonText}>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={handleHelpPress}
              style={styles.helpButton}
            >
              <Text style={styles.helpButtonText}>?</Text>
            </TouchableOpacity>
          </>
        );

      case 'PropertyDetails':
        return (
          <>
            <TouchableOpacity 
              onPress={() => navigation.goBack()} 
              style={styles.headerButton}
            >
              <Text style={styles.headerButtonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Favorites')} 
              style={styles.favoriteButton}
            >
              <Text style={styles.favoriteButtonText}>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={handleHelpPress}
              style={styles.helpButton}
            >
              <Text style={styles.helpButtonText}>?</Text>
            </TouchableOpacity>
          </>
        );

      case 'Favorites':
        return (
          <>
            <TouchableOpacity 
              onPress={() => navigation.goBack()} 
              style={styles.headerButton}
            >
              <Text style={styles.headerButtonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={handleHelpPress}
              style={styles.helpButton}
            >
              <Text style={styles.helpButtonText}>?</Text>
            </TouchableOpacity>
          </>
        );

      default:
        return (
          <>
            <Text style={styles.headerTitle}>{title}</Text>
            <TouchableOpacity 
              onPress={handleHelpPress}
              style={styles.helpButton}
            >
              <Text style={styles.helpButtonText}>?</Text>
            </TouchableOpacity>
          </>
        );
    }
  };

  return (
    <View style={styles.headerContainer}>
      {renderHeaderContent()}
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
