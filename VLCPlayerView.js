import React, { useState, useRef } from "react";
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
  Platform
} from "react-native";
import VLCPlayer from "./VLCPlayer";

const styles = StyleSheet.create({
  video: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  }
});

const PlayerView = props => {
  const vlcPlayer = useRef();

  const onBuffering = event => {};

  const onPlaying = event => {};

  const onPaused = event => {};

  const onProgress = event => {};

  const onEnded = event => {};

  const onError = event => {};

  const onOpen = event => {};

  const onLoadStart = event => {
    vlcPlayer.current.seek(0);
  };

  const [paused, setPaused] = useState(props.paused||false);

  return (
    <VLCPlayer
      ref={vlcPlayer}
      paused={paused}
      // seek={this.state.seek}
      style={[styles.video]}
      source={{ uri: props.uri }}
      videoAspectRatio={props.videoAspectRatio}
      onProgress={e => {
        props.onProgress ? props.onProgress(e) : onProgress(e);
      }}
      onEnd={e => {
        props.onEnded ? props.onEnded(e) : onEnded(e);
      }}
      onStopped={e => {
        props.onEnded ? props.onEnded(e) : onEnded(e);
      }}
      onPlaying={e => {
        props.onPlaying ? props.onPlaying(e) : onPlaying(e);
      }}
      onBuffering={e => {
        props.onBuffering ? props.onBuffering(e) : onBuffering(e);
      }}
      onPaused={e => {
        props.onPaused ? props.onPaused(e) : onPaused(e);
      }}
      progressUpdateInterval={250}
      onError={e => {
        props.onError ? props.onError(e) : onError(e);
      }}
      onOpen={e => {
        props.onOpen ? props.onOpen(e) : onOpen(e);
      }}
      onLoadStart={e => {
        props.onLoadStart ? props.onLoadStart(e) : onLoadStart(e);
      }}
    />
  );
};

export default PlayerView;
