import ModalVideo from 'modal-video';

export const openModal = (videoId) => {
    console.log(videoId)
    const button = document.createElement('BUTTON')
    button.dataset.videoId = videoId
    new ModalVideo([button])
    button.click()
}