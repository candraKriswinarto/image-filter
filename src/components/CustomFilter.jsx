import { Box } from "@mui/material"
import SliderField from "./SliderField"

const CustomFilter = () => {

  const slider = [
    { label: 'Contrast', defaultValue: 100, field: 'contrast' },
    { label: 'Brightness', defaultValue: 100, field: 'brightness' },
    { label: 'Saturation', defaultValue: 100, field: 'saturate' },
    { label: 'Sepia', defaultValue: 0, field: 'sepia' },
    { label: 'Gray Scale', defaultValue: 0, field: 'gray' },
  ]

  return (
    <Box sx={{ marginTop: '2rem' }}>
      {slider.map(slide => <SliderField slide={slide} key={slide.field} />)}
    </Box>
  )
}

export default CustomFilter