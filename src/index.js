export default function log() {
  console.log('123')
}

export const add = (a) => {
  if (a < 0) {
    a = 0
  } else {
    a++
  }

  return a
}
