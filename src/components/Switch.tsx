import { Switch as NativeSwitch, useColorScheme } from 'react-native';
import {colors} from '@/styles/colors'

function Switch({
  ...props
}: React.ComponentPropsWithoutRef<typeof NativeSwitch>) {
 
  return (
    <NativeSwitch
      trackColor={{
        true: colors.green[400],
        false: colors.gray[500]
      }}
      thumbColor={colors.green[400]}
      {...props}
    />
  );
}

export { Switch };
