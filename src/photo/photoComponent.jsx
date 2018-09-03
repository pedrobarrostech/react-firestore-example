import React, { Component } from 'react'
import Scroll from 'react-scroll'
import Gallery from 'react-grid-gallery';

const Element = Scroll.Element

class PhotoList extends Component {
  constructor (props) {
		super(props);
		this.state = {
			photos: []
		};
		this.fetchInstagramPhotos = this.fetchInstagramPhotos.bind(this)
	}

	componentDidMount () {
    this.fetchInstagramPhotos()
	}

	fetchInstagramPhotos () {
		this.props.fetchInstagramPhotos().payload.then((res) => {
			let photos = res.data.data
			const newPhotos = photos.map((photo) => {
				const newPhoto = {}
				newPhoto.src = photo.images['standard_resolution'].url
				newPhoto.thumbnail = photo.images['thumbnail'].url
				newPhoto.thumbnailWidth = 170
				newPhoto.thumbnailHeight = 160
				return newPhoto
			})
			this.setState({ photos: newPhotos })
		})
	}
  
  render() {
    return (
      <Element name="gallery" className="element">
        <div className='container'>
          <div className='section'>

            <div className='row'>
              <div className='col s12 center'>
								<h2><span className='red-text text-darken-3'>G</span>aleria</h2>
                <p className='left-align light'>
									Veja as fotos de alguns dos trabalhos realizados no Estúdio Artwork.
								</p>
              	<Gallery images={this.state.photos}/>
              </div>
            </div>

          </div>
        </div>
      </Element>
    )
  }
}

export default PhotoList;