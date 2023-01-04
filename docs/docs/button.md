import { Button, Stack } from '@moss-ui/components'

# Button
Buttons allow users to take actions, and make choices, with a single tap.

## Basic button
```jsx
<Button>Save<Button>
```

<Stack gap={16} direction='row'>
    <Stack gap={8}>
        <Button size='small'>Small</Button>
        <Button size='medium'>Medium</Button>
        <Button size='large'>Large</Button>
    </Stack>
    <Stack gap={8}>
        <Button size='small' variant='secondary'>Small</Button>
        <Button size='medium' variant='secondary'>Medium</Button>
        <Button size='large' variant='secondary'>Large</Button>
    </Stack>
</Stack>