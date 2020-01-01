import React, { useState } from 'react'
import { StyleSheet, Text, TextProps, View } from 'react-native'
import { text, black, lightGray } from 'src/components/colors'

const s = StyleSheet.create({
  base: {
    fontFamily: 'SFProDisplay-Regular'
  },
  h1: {
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 34,
    fontWeight: 'bold'
  },
  h2: {
    fontSize: 28,
    fontWeight: '600'
  },
  h3: {
    fontSize: 22,
    fontWeight: '400'
  },
  h4: {
    fontSize: 21,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    marginRight: 10
  },
  labelMuted: {
    fontSize: 15,
    fontWeight: '600'
  },
  caption: {
    fontSize: 12,
    fontWeight: 'normal'
  },
  description: {
    fontSize: 16,
    fontWeight: 'normal'
  },
  title: {
    fontSize: 28,
    fontWeight: '700'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'normal'
  },
  descriptionWrapper: {
    position: 'relative'
  },
  more: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, .9)',
    paddingLeft: 20
  }
})

interface Props extends TextProps {
  children?: string | number | undefined | null
  color?: string
}

function Base ({ color = black, style, children, ...other }: Props) {
  return <Text style={[s.base, { color }, style]} {...other}>{children}</Text>
}

export function H1 ({ children, style, ...other }: Props) {
  return <Base style={[s.h1, style]} color={black} {...other}>{children}</Base>
}

export function H2 ({ children, style, ...other }: Props) {
  return <Base style={[s.h2, style]} {...other}>{children}</Base>
}

export function H3 ({ children, style, ...other }: Props) {
  return <Base style={[s.h3, style]} {...other}>{children}</Base>
}

export function H4 ({ children, style, ...other }: Props) {
  return <Base style={s.h4} {...other}>{children}</Base>
}

export function Label ({ muted, children, ...other }: Props & { muted?: boolean }) {
  if (muted) {
    return <Base style={s.labelMuted} color='#58595E' {...other}>{children && String(children).toUpperCase()}</Base>
  }
  return <Base style={s.label} color='#007AFF' {...other}>{children && String(children).toUpperCase()}</Base>
}

export function Description ({ children, ...other }: Props) {
  const [expanded, setExpanded] = useState(false)
  if (!children) {
    return null
  }
  if (expanded) {
    return <Base ellipsizeMode='tail' style={s.description} color={black} {...other}>{children}</Base>
  }
  return (
    <View style={s.descriptionWrapper}>
      <Base numberOfLines={2} ellipsizeMode='tail' style={s.description} color={black} {...other}>{children}</Base>
      <Link style={s.more} onPress={() => setExpanded(true)}>More</Link>
    </View>
  )
}

export function Title ({ children, ...other }: Props) {
  return <Base style={s.title} color={black} {...other}>{children}</Base>
}

export function Subtitle ({ children, ...other }: Props) {
  return <Base style={s.subtitle} color={lightGray} {...other}>{children}</Base>
}

export function Caption ({ children, ...other }: Props) {
  return <Base style={s.caption} color={lightGray} {...other}>{children}</Base>
}

export function Link ({ children, style, ...other }: Props) {
  return <Base style={[s.description, style]} color='#007AFF' {...other}>{children}</Base>
}
