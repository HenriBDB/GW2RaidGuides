import React, { useState } from "react"
import PropTypes from 'prop-types'
import ModalVideo from 'react-modal-video'
import {
    VideoPreviewWrapperMultiple,
    VideoPreview,
    YoutubePlaySmall,
} from './styles'

const YoutubePlayer = (props) => {
    const [isPlayerOpen, setPlayerOpen] = useState(false)

    if (props.videoId && !props.customThumbnail) {
        return (
            <>
                <ModalVideo channel='youtube' autoplay isOpen={isPlayerOpen} videoId={props.videoId} onClose={() => setPlayerOpen(false)} />
                <VideoPreviewWrapperMultiple onClick={() => setPlayerOpen(true)}>
                    <VideoPreview src={"https://img.youtube.com/vi/" + props.videoId + "/hqdefault.jpg"} />
                    <YoutubePlaySmall />
                </VideoPreviewWrapperMultiple>
            </>
        )
    } else if (props.textOnly) {
        return (
            <VideoPreviewWrapperMultiple style={{ "cursor": "default" }}>
                <div style={{ "display": "flex", "height": "100%", "align-items": "center", "justify-content": "center" }}>
                    <strong>{props.textOnly}</strong>
                </div>
            </VideoPreviewWrapperMultiple>
        )
    } else if (props.videoId && props.customThumbnail) {
        return (
            <>
                <ModalVideo channel='youtube' autoplay isOpen={isPlayerOpen} videoId={props.videoId} onClose={() => setPlayerOpen(false)} />
                <VideoPreviewWrapperMultiple onClick={() => setPlayerOpen(true)}>
                    <VideoPreview src={props.customThumbnail}/>
                    <YoutubePlaySmall />
                </VideoPreviewWrapperMultiple>
            </>
        )
    } else {
        return (
            <VideoPreviewWrapperMultiple style={{ "cursor": "default" }}>
                <div style={{ "display": "flex", "height": "100%", "align-items": "center", "justify-content": "center" }}>
                    Video Not Available Yet
                </div>
            </VideoPreviewWrapperMultiple>
        )
    }
}

export default YoutubePlayer

YoutubePlayer.protoTypes = {
    videoId: PropTypes.string,
    textOnly: PropTypes.string,
    customThumbnail: PropTypes.string,
}