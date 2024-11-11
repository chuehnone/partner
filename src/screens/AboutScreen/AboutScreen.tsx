import React from 'react';

import {observer} from 'mobx-react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Text, Card} from 'react-native-paper';
import {View, FlatList} from 'react-native';

import {styles} from './styles';
import {useTheme} from '../../hooks';

export const AboutScreen: React.FC = observer(() => {
  const {colors} = useTheme();

  const Item = ({title, value}: {title: string; value?: string}) => (
    <Card
      style={[
        styles.card,
        {backgroundColor: colors.surface},
        {borderColor: colors.surfaceVariant},
      ]}>
      <Card.Content>
        <View style={value ? styles.itemWithValue : styles.item}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <FlatList
          data={[{key: '版本號', value: '1.0.0'}, {key: '著作權聲明'}]}
          renderItem={({item}) => <Item title={item.key} value={item.value} />}
        />
      </View>
    </SafeAreaProvider>
  );
});
