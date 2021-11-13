import {styled} from '@stitchesConfig';
import * as LabelPrimitive from '@radix-ui/react-label';

export const Label = styled(LabelPrimitive.Root, {
  userSelect: 'none',
  color: '#3f3e68',
  fontWeight: '500',
  fontSize: '1rem',
  lineHeight: 1.6,
});
