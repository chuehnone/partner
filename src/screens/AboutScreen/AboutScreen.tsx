import React from 'react';

import {observer} from 'mobx-react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {View, FlatList, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export const AboutScreen: React.FC = observer(() => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <FlatList
          data={[{key: '版本號：1.0.0'}, {key: '著作權聲明'}]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    </SafeAreaProvider>
  );
});
