import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const Zpractice = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {title: 'Tab 1', content: 'Content for Tab 1'},
    {title: 'Tab 2', content: 'Content for Tab 2'},
    {title: 'Tab 3', content: 'Content for Tab 3'},
  ];

  const changeTab = index => {
    setActiveTab(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabButton,
              activeTab === index && styles.activeTabButton,
            ]}
            onPress={() => changeTab(index)}>
            <Text style={styles.tabText}>{tab.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView>
        <Text>{tabs[activeTab].content}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Zpractice;
