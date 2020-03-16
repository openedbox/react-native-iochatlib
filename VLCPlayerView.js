import React,{useState,useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  BackHandler,
  Modal,
  Platform,
} from 'react-native';
import VLCPlayer from './VLCPlayer';

const styles = StyleSheet.create({
  video: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
})



const PlayerView = (props) => {

    const vlcPlayer = useRef()

    const onBuffering = (event)=>{

    }

    const onPlaying = (event)=>{

    }

    const onPaused = (event)=>{

    }


    const onProgress = (event)=>{

    }

    const onEnded = (event)=>{

    }

    const onError = (event)=>{

    }


    const onOpen = (event)=>{

    }

    const onLoadStart = (event)=>{
        vlcPlayer.current.seek(0);
    }

  const [paused,setPaused] = useState(false)

  return (
      <VLCPlayer
          ref={vlcPlayer}
        //   paused={this.state.paused}
          //seek={this.state.seek}
          style={[styles.video]}
          source={{ uri: props.uri }}
          videoAspectRatio={props.videoAspectRatio}
          onProgress={(e)=>{onProgress(e)}}
          onEnd={(e)=>{onEnded(e)}}
          onStopped={(e)=>{onEnded(e)}}
          onPlaying={(e)=>{onPlaying(e)}}
          onBuffering={(e)=>{onBuffering(e)}}
          onPaused={(e)=>{onPaused(e)}}
          progressUpdateInterval={250}
          onError={(e)=>{onError(e)}}
          onOpen={(e)=>{onOpen(e)}}
          onLoadStart={(e)=>{onLoadStart(e)}}
        />
  );
};

export default PlayerView;