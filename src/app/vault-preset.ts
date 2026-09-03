import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { Preset } from '@primeuix/themes/types';

const vaultPreset: Preset = definePreset(Aura, {
  components: {
    floatlabel: {
      over: {
        active: {
          top: '-0.8rem',
        },
      },
    },
  },
});

export default vaultPreset;
