export const size = {
    '0': '0',
    '6': '6px',
    '8': '8px',
    '10': '10px',
    '12': '12px',
    '16': '16px',
    '24': '24px',
} as const

export type Size = keyof typeof size

export type MarginSize = Size | 'auto'