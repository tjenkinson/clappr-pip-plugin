import {UICorePlugin, Styler, Events, $} from 'clappr'
import pipIcon from './icons/pip.svg'

export default class PIPPlugin extends UICorePlugin {
  get name() { return 'pip-plugin' }
  get tagName() { return 'button' }
  
  get attributes() {
    return {
      'class': this.name
    }
  }

  constructor(core) {
    super(core)
    this._pipSupported = false
    this._currentPlayback = null
    this.$el.addClass("media-control-button media-control-icon").css({
      float: "right",
      height: "100%"
    }).append(pipIcon)
    
    this.$el.click(() => {
      var video = this._playback.el
      video.webkitSetPresentationMode(video.webkitPresentationMode === "picture-in-picture" ? "inline" : "picture-in-picture")
    })
  }

  bindEvents() {
    this.listenTo(this.core.mediaControl, Events.MEDIACONTROL_RENDERED, this._init)
    this.listenTo(this.core.mediaControl, Events.MEDIACONTROL_CONTAINERCHANGED, this._onContainerChanged)
  }

  _onContainerChanged() {
    this._updatePlayback()
    this._renderPlugin()
  }

  _updatePlayback(playback) {
    var playback = this.core.mediaControl.container.playback
    if (this._playback === playback) {
      // not changed
      return
    }
    this._playback = playback
    this._checkPipSupport()
  }

  _checkPipSupport() {
    var el = this._playback.el
    this._pipSupported = el && el.nodeName.toLowerCase() === "video" && el.webkitSupportsPresentationMode && typeof el.webkitSetPresentationMode === "function"
  }

  _init() {
    this._updatePlayback()
    this._checkPipSupport()
    this.core.mediaControl.$el.find(".media-control-layer .media-control-right-panel .media-control-button[data-fullscreen]").first().after(this.el)
    this._renderPlugin()
  }

  _renderPlugin() {
    if (this._pipSupported) {
      this.$el.show()
    }
    else {
      this.$el.hide()
    }
  }
}
