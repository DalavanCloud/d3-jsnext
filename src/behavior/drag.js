import { d3_event_dragSuppress } from '../event/drag';
import { d3_identity } from '../core/identity';
import { d3_window } from '../core/document';
import { d3_noop } from '../core/noop';
import { d3_eventDispatch } from '../event/event';
import { d3$rebind } from '../core/rebind';
import { d3$select } from '../selection/selection';
import { d3$touch } from '../event/touch';
import { d3$mouse } from '../event/mouse';
import { d3$behavior } from './behavior';

var d3$behavior$drag;

d3$behavior$drag = function() {
  var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"),
      origin = null,
      mousedown = dragstart(d3_noop, d3$mouse, d3_window, "mousemove", "mouseup"),
      touchstart = dragstart(d3_behavior_dragTouchId, d3$touch, d3_identity, "touchmove", "touchend");

  function drag() {
    this.on("mousedown.drag", mousedown)
        .on("touchstart.drag", touchstart);
  }

  function dragstart(id, position, subject, move, end) {
    return function() {
      var that = this,
          target = window.d3_event.target,
          parent = that.parentNode,
          dispatch = event.of(that, arguments),
          dragged = 0,
          dragId = id(),
          dragName = ".drag" + (dragId == null ? "" : "-" + dragId),
          dragOffset,
          dragSubject = d3$select(subject(target)).on(move + dragName, moved).on(end + dragName, ended),
          dragRestore = d3_event_dragSuppress(target),
          position0 = position(parent, dragId);

      if (origin) {
        dragOffset = origin.apply(that, arguments);
        dragOffset = [dragOffset.x - position0[0], dragOffset.y - position0[1]];
      } else {
        dragOffset = [0, 0];
      }

      dispatch({type: "dragstart"});

      function moved() {
        var position1 = position(parent, dragId), dx, dy;
        if (!position1) return; // this touch didn’t move

        dx = position1[0] - position0[0];
        dy = position1[1] - position0[1];
        dragged |= dx | dy;
        position0 = position1;

        dispatch({
          type: "drag",
          x: position1[0] + dragOffset[0],
          y: position1[1] + dragOffset[1],
          dx: dx,
          dy: dy
        });
      }

      function ended() {
        if (!position(parent, dragId)) return; // this touch didn’t end
        dragSubject.on(move + dragName, null).on(end + dragName, null);
        dragRestore(dragged && window.d3_event.target === target);
        dispatch({type: "dragend"});
      }
    };
  }

  drag.origin = function(x) {
    if (!arguments.length) return origin;
    origin = x;
    return drag;
  };

  return d3$rebind(drag, event, "on");
};

// While it is possible to receive a touchstart event with more than one changed
// touch, the event is only shared by touches on the same target; for new
// touches targetting different elements, multiple touchstart events are
// received even when the touches start simultaneously. Since multiple touches
// cannot move the same target to different locations concurrently without
// tearing the fabric of spacetime, we allow the first touch to win.
function d3_behavior_dragTouchId() {
  return window.d3_event.changedTouches[0].identifier;
}

export { d3$behavior$drag, d3_behavior_dragTouchId };