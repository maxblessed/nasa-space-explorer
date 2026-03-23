import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import dayjs from 'dayjs'
import type { ApodResponse } from '../../features/apod/types/types'
import MediaTile from './MediaTile'

interface ModalProps {
  item: ApodResponse | null
  setItem: (item: ApodResponse | null) => void
}

export default function Modal({ item, setItem }: ModalProps) {
  return (
    <Dialog open={!!item} onClose={() => setItem(null)} maxWidth='md' fullWidth>
      {item && (
        <>
          <DialogTitle sx={{ pr: 6 }}>
            <Typography
              variant='h6'
              fontWeight={700}
              sx={{ color: 'text.primary', mb: 1 }}
            >
              {item.title}
            </Typography>
            <IconButton
              onClick={() => setItem(null)}
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent dividers>
            <MediaTile
              url={item.url}
              media_type={item.media_type}
              title={item.title}
              showControls={true}
              height={400}
            />
            <Typography
              variant='caption'
              sx={{ color: 'text.secondary', display: 'block', my: 2 }}
            >
              {dayjs(item.date).format('MMM D, YYYY')}
            </Typography>

            <Typography
              variant='body2'
              sx={{
                color: 'text.primary',
                lineHeight: 1.8,
                letterSpacing: 0.2,
              }}
            >
              {item.explanation}
            </Typography>
          </DialogContent>
        </>
      )}
    </Dialog>
  )
}
