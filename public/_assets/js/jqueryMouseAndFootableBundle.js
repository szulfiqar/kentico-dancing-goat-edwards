﻿/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *mousewheel
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */
(function (n) { typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? module.exports = n : n(jQuery) })(function (n) { function e(i) { var r = i || window.event, y = h.call(arguments, 1), o = 0, e = 0, f = 0, l = 0, a, v; if (i = n.event.fix(r), i.type = "mousewheel", "detail" in r && (f = r.detail * -1), "wheelDelta" in r && (f = r.wheelDelta), "wheelDeltaY" in r && (f = r.wheelDeltaY), "wheelDeltaX" in r && (e = r.wheelDeltaX * -1), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (e = f * -1, f = 0), o = f === 0 ? e : f, "deltaY" in r && (f = r.deltaY * -1, o = f), "deltaX" in r && (e = r.deltaX, f === 0 && (o = e * -1)), f !== 0 || e !== 0) return r.deltaMode === 1 ? (a = n.data(this, "mousewheel-line-height"), o *= a, f *= a, e *= a) : r.deltaMode === 2 && (v = n.data(this, "mousewheel-page-height"), o *= v, f *= v, e *= v), l = Math.max(Math.abs(f), Math.abs(e)), (!t || l < t) && (t = l, s(r, l) && (t /= 40)), s(r, l) && (o /= 40, e /= 40, f /= 40), o = Math[o >= 1 ? "floor" : "ceil"](o / t), e = Math[e >= 1 ? "floor" : "ceil"](e / t), f = Math[f >= 1 ? "floor" : "ceil"](f / t), i.deltaX = e, i.deltaY = f, i.deltaFactor = t, i.deltaMode = 0, y.unshift(i, o, e, f), u && clearTimeout(u), u = setTimeout(c, 200), (n.event.dispatch || n.event.handle).apply(this, y) } function c() { t = null } function s(n, t) { return r.settings.adjustOldDeltas && n.type === "mousewheel" && t % 120 == 0 } var o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], i = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], h = Array.prototype.slice, u, t, f, r; if (n.event.fixHooks) for (f = o.length; f;) n.event.fixHooks[o[--f]] = n.event.mouseHooks; r = n.event.special.mousewheel = { version: "3.1.9", setup: function () { if (this.addEventListener) for (var t = i.length; t;) this.addEventListener(i[--t], e, !1); else this.onmousewheel = e; n.data(this, "mousewheel-line-height", r.getLineHeight(this)); n.data(this, "mousewheel-page-height", r.getPageHeight(this)) }, teardown: function () { if (this.removeEventListener) for (var n = i.length; n;) this.removeEventListener(i[--n], e, !1); else this.onmousewheel = null }, getLineHeight: function (t) { return parseInt(n(t)["offsetParent" in n.fn ? "offsetParent" : "parent"]().css("fontSize"), 10) }, getPageHeight: function (t) { return n(t).height() }, settings: { adjustOldDeltas: !0 } }; n.fn.extend({ mousewheel: function (n) { return n ? this.bind("mousewheel", n) : this.trigger("mousewheel") }, unmousewheel: function (n) { return this.unbind("mousewheel", n) } }) });

/*
 * m intent
 */
(function (n) { function o() { this === t.elem && (t.pos = [-260, -260], t.elem = !1, i = 3) } var t = { pos: [-260, -260] }, i = 3, r = document, s = r.documentElement, u = r.body, f, e; n.event.special.mwheelIntent = { setup: function () { var t = n(this).bind("mousewheel", n.event.special.mwheelIntent.handler); return this !== r && this !== s && this !== u && t.bind("mouseleave", o), t = null, !0 }, teardown: function () { return n(this).unbind("mousewheel", n.event.special.mwheelIntent.handler).unbind("mouseleave", o), !0 }, handler: function (r) { var u = [r.clientX, r.clientY]; if (this === t.elem || Math.abs(t.pos[0] - u[0]) > i || Math.abs(t.pos[1] - u[1]) > i) return t.elem = this, t.pos = u, i = 250, clearTimeout(e), e = setTimeout(function () { i = 10 }, 200), clearTimeout(f), f = setTimeout(function () { i = 3 }, 1500), r = n.extend({}, r, { type: "mwheelIntent" }), (n.event.dispatch || n.event.handle).apply(this, arguments) } }; n.fn.extend({ mwheelIntent: function (n) { return n ? this.bind("mwheelIntent", n) : this.trigger("mwheelIntent") }, unmwheelIntent: function (n) { return this.unbind("mwheelIntent", n) } }); n(function () { u = r.body; n(r).bind("mwheelIntent.mwheelIntentDefault", n.noop) }) })(jQuery);

/*!
 * FooTable - Awesome Responsive Tables
 * Version : 2.0.3
 * http://fooplugins.com/plugins/footable-jquery/
 *
 * Requires jQuery - http://jquery.com/
 *
 * Copyright 2014 Steven Usher & Brad Vincent
 * Released under the MIT license
 * You are free to use FooTable in commercial projects as long as this copyright header is left intact.
 *
 * Date: 11 Nov 2014
 */
(function (n, t) { function r() { var n = this; n.id = null; n.busy = !1; n.start = function (t, i) { n.busy || (n.stop(), n.id = setTimeout(function () { t(); n.id = null; n.busy = !1 }, i), n.busy = !0) }; n.stop = function () { n.id !== null && (clearTimeout(n.id), n.id = null, n.busy = !1) } } function u(i, u, f) { var e = this; e.id = f; e.table = i; e.options = u; e.breakpoints = []; e.breakpointNames = ""; e.columns = {}; e.plugins = t.footable.plugins.load(e); var h = e.options, o = h.classes, c = h.events, s = h.triggers, l = 0; return e.timers = { resize: new r, register: function (n) { return e.timers[n] = new r, e.timers[n] } }, e.init = function () { var u = n(t), i = n(e.table), r; if (t.footable.plugins.init(e), i.hasClass(o.loaded)) { e.raise(c.alreadyInitialized); return } e.raise(c.initializing); i.addClass(o.loading); i.find(h.columnDataSelector).each(function () { var n = e.getColumnData(this); e.columns[n.index] = n }); for (r in h.breakpoints) e.breakpoints.push({ name: r, width: h.breakpoints[r] }), e.breakpointNames += r + " "; e.breakpoints.sort(function (n, t) { return n.width - t.width }); i.unbind(s.initialize).bind(s.initialize, function () { i.removeData("footable_info"); i.data("breakpoint", ""); i.trigger(s.resize); i.removeClass(o.loading); i.addClass(o.loaded).addClass(o.main); e.raise(c.initialized) }).unbind(s.redraw).bind(s.redraw, function () { e.redraw() }).unbind(s.resize).bind(s.resize, function () { e.resize() }).unbind(s.expandFirstRow).bind(s.expandFirstRow, function () { i.find(h.toggleSelector).first().not("." + o.detailShow).trigger(s.toggleRow) }).unbind(s.expandAll).bind(s.expandAll, function () { i.find(h.toggleSelector).not("." + o.detailShow).trigger(s.toggleRow) }).unbind(s.collapseAll).bind(s.collapseAll, function () { i.find("." + o.detailShow).trigger(s.toggleRow) }); i.trigger(s.initialize); u.bind("resize.footable", function () { e.timers.resize.stop(); e.timers.resize.start(function () { e.raise(s.resize) }, h.delay) }) }, e.addRowToggle = function () { var t, r, u, i, f; if (h.addRowToggle) { t = n(e.table); r = !1; t.find("span." + o.toggle).remove(); for (u in e.columns) if (i = e.columns[u], i.toggle) { r = !0; f = "> tbody > tr:not(." + o.detail + ",." + o.disabled + ") > td:nth-child(" + (parseInt(i.index, 10) + 1) + "),> tbody > tr:not(." + o.detail + ",." + o.disabled + ") > th:nth-child(" + (parseInt(i.index, 10) + 1) + ")"; t.find(f).not("." + o.detailCell).prepend(n(h.toggleHTMLElement).addClass(o.toggle)); return } r || t.find("> tbody > tr:not(." + o.detail + ",." + o.disabled + ") > td:first-child").add("> tbody > tr:not(." + o.detail + ",." + o.disabled + ") > th:first-child").not("." + o.detailCell).prepend(n(h.toggleHTMLElement).addClass(o.toggle)) } }, e.setColumnClasses = function () { var f = n(e.table), u, t, i, r; for (u in e.columns) t = e.columns[u], t.className !== null && (i = "", r = !0, n.each(t.matches, function (n, t) { r || (i += ", "); i += "> tbody > tr:not(." + o.detail + ") > td:nth-child(" + (parseInt(t, 10) + 1) + ")"; r = !1 }), f.find(i).not("." + o.detailCell).addClass(t.className)) }, e.bindToggleSelectors = function () { var t = n(e.table); e.hasAnyBreakpointColumn() && (t.find(h.toggleSelector).unbind(s.toggleRow).bind(s.toggleRow, function () { var t = n(this).is("tr") ? n(this) : n(this).parents("tr:first"); e.toggleDetail(t) }), t.find(h.toggleSelector).unbind("click.footable").bind("click.footable", function (i) { t.is(".breakpoint") && n(i.target).is("td,th,." + o.toggle) && n(this).trigger(s.toggleRow) })) }, e.parse = function (n, t) { var i = h.parsers[t.type] || h.parsers.alpha; return i(n) }, e.getColumnData = function (t) { var i = n(t), o = i.data("hide"), k = i.index(), r, w, y, p, s, u, f, a, v, b; if (o = o || "", o = jQuery.map(o.split(","), function (n) { return jQuery.trim(n) }), r = { index: k, hide: {}, type: i.data("type") || "alpha", name: i.data("name") || n.trim(i.text()), ignore: i.data("ignore") || !1, toggle: i.data("toggle") || !1, className: i.data("class") || null, matches: [], names: {}, group: i.data("group") || null, groupName: null, isEditable: i.data("editable") }, r.group !== null && (w = n(e.table).find('> thead > tr.footable-group-row > th[data-group="' + r.group + '"], > thead > tr.footable-group-row > td[data-group="' + r.group + '"]').first(), r.groupName = e.parse(w, { type: "alpha" })), y = parseInt(i.prev().attr("colspan") || 0, 10), l += y > 1 ? y - 1 : 0, p = parseInt(i.attr("colspan") || 0, 10), s = r.index + l, p > 1) for (u = i.data("names"), u = u || "", u = u.split(","), f = 0; f < p; f++) r.matches.push(f + s), f < u.length && (r.names[f + s] = u[f]); else r.matches.push(s); r.hide["default"] = i.data("hide") === "all" || n.inArray("default", o) >= 0; a = !1; for (v in h.breakpoints) r.hide[v] = i.data("hide") === "all" || n.inArray(v, o) >= 0, a = a || r.hide[v]; return r.hasBreakpoint = a, b = e.raise(c.columnData, { column: { data: r, th: t } }), b.column.data }, e.getViewportWidth = function () { return window.innerWidth || (document.body ? document.body.offsetWidth : 0) }, e.calculateWidth = function (n, t) { return jQuery.isFunction(h.calculateWidthOverride) ? h.calculateWidthOverride(n, t) : (t.viewportWidth < t.width && (t.width = t.viewportWidth), t.parentWidth < t.width && (t.width = t.parentWidth), t) }, e.hasBreakpointColumn = function (n) { for (var t in e.columns) if (e.columns[t].hide[n]) { if (e.columns[t].ignore) continue; return !0 } return !1 }, e.hasAnyBreakpointColumn = function () { for (var n in e.columns) if (e.columns[n].hasBreakpoint) return !0; return !1 }, e.resize = function () { var t = n(e.table), i, r, o, u, h; if (t.is(":visible")) { if (!e.hasAnyBreakpointColumn()) { t.trigger(s.redraw); return } if (i = { width: t.width(), viewportWidth: e.getViewportWidth(), parentWidth: t.parent().width() }, i = e.calculateWidth(t, i), r = t.data("footable_info"), t.data("footable_info", i), e.raise(c.resizing, { old: r, info: i }), !r || r && r.width && r.width !== i.width) { for (o = null, h = 0; h < e.breakpoints.length; h++) if (u = e.breakpoints[h], u && u.width && i.width <= u.width) { o = u; break } var f = o === null ? "default" : o.name, l = e.hasBreakpointColumn(f), a = t.data("breakpoint"); t.data("breakpoint", f).removeClass("default breakpoint").removeClass(e.breakpointNames).addClass(f + (l ? " breakpoint" : "")); f !== a && (t.trigger(s.redraw), e.raise(c.breakpoint, { breakpoint: f, info: i })) } e.raise(c.resized, { old: r, info: i }) } }, e.redraw = function () { e.addRowToggle(); e.bindToggleSelectors(); e.setColumnClasses(); var t = n(e.table), i = t.data("breakpoint"), r = e.hasBreakpointColumn(i); t.find("> tbody > tr:not(." + o.detail + ")").data("detail_created", !1).end().find("> thead > tr:last-child > th").each(function () { var r = e.columns[n(this).index()], u = "", h = !0, f; if (n.each(r.matches, function (n, t) { h || (u += ", "); var i = t + 1; u += "> tbody > tr:not(." + o.detail + ") > td:nth-child(" + i + ")"; u += ", > tfoot > tr:not(." + o.detail + ") > td:nth-child(" + i + ")"; u += ", > colgroup > col:nth-child(" + i + ")"; h = !1 }), u += ', > thead > tr[data-group-row="true"] > th[data-group="' + r.group + '"]', f = t.find(u).add(this), i !== "" && (r.hide[i] === !1 ? f.addClass("footable-visible").show() : f.removeClass("footable-visible").hide()), t.find("> thead > tr.footable-group-row").length === 1) { var l = t.find('> thead > tr:last-child > th[data-group="' + r.group + '"]:visible, > thead > tr:last-child > th[data-group="' + r.group + '"]:visible'), c = t.find('> thead > tr.footable-group-row > th[data-group="' + r.group + '"], > thead > tr.footable-group-row > td[data-group="' + r.group + '"]'), s = 0; n.each(l, function () { s += parseInt(n(this).attr("colspan") || 1, 10) }); s > 0 ? c.attr("colspan", s).show() : c.hide() } }).end().find("> tbody > tr." + o.detailShow).each(function () { e.createOrUpdateDetailRow(this) }); t.find("[data-bind-name]").each(function () { e.toggleInput(this) }); t.find("> tbody > tr." + o.detailShow + ":visible").each(function () { var t = n(this).next(); t.hasClass(o.detail) && (r ? t.show() : t.hide()) }); t.find("> thead > tr > th.footable-last-column, > tbody > tr > td.footable-last-column").removeClass("footable-last-column"); t.find("> thead > tr > th.footable-first-column, > tbody > tr > td.footable-first-column").removeClass("footable-first-column"); t.find("> thead > tr, > tbody > tr").find("> th.footable-visible:last, > td.footable-visible:last").addClass("footable-last-column").end().find("> th.footable-visible:first, > td.footable-visible:first").addClass("footable-first-column"); e.raise(c.redrawn) }, e.toggleDetail = function (t) { var i = t.jquery ? t : n(t), r = i.next(); i.hasClass(o.detailShow) ? (i.removeClass(o.detailShow), r.hasClass(o.detail) && r.hide(), e.raise(c.rowCollapsed, { row: i[0] })) : (e.createOrUpdateDetailRow(i[0]), i.addClass(o.detailShow).next().show(), e.raise(c.rowExpanded, { row: i[0] })) }, e.removeRow = function (t) { var i = t.jquery ? t : n(t), r; i.hasClass(o.detail) && (i = i.prev()); r = i.next(); i.data("detail_created") === !0 && r.remove(); i.remove(); e.raise(c.rowRemoved) }, e.appendRow = function (t) { var i = t.jquery ? t : n(t); n(e.table).find("tbody").append(i); e.redraw() }, e.getColumnFromTdIndex = function (t) { var i = null; for (var r in e.columns) if (n.inArray(t, e.columns[r].matches) >= 0) { i = e.columns[r]; break } return i }, e.createOrUpdateDetailRow = function (t) { var i = n(t), r = i.next(), s, u = [], l, f; return i.data("detail_created") === !0 ? !0 : i.is(":hidden") ? !1 : (e.raise(c.rowDetailUpdating, { row: i, detail: r }), i.find("> td:hidden").each(function () { var r = n(this).index(), t = e.getColumnFromTdIndex(r), s = t.name, i, h, f; return t.ignore === !0 ? !0 : (r in t.names && (s = t.names[r]), i = n(this).attr("data-bind-name"), i != null && n(this).is(":empty") && (h = n("." + o.detailInnerValue + '[data-bind-value="' + i + '"]'), n(this).html(n(h).contents().detach())), t.isEditable !== !1 && (t.isEditable || n(this).find(":input").length > 0) && (i == null && (i = "bind-" + n.now() + "-" + r, n(this).attr("data-bind-name", i)), f = n(this).contents().detach()), f || (f = n(this).contents().clone(!0, !0)), u.push({ name: s, value: e.parse(this, t), display: f, group: t.group, groupName: t.groupName, bindName: i }), !0) }), u.length === 0) ? !1 : (l = i.find("> td:visible").length, f = r.hasClass(o.detail), f || (r = n('<tr class="' + o.detail + '"><td class="' + o.detailCell + '"><div class="' + o.detailInner + '"><\/div><\/td><\/tr>'), i.after(r)), r.find("> td:first").attr("colspan", l), s = r.find("." + o.detailInner).empty(), h.createDetail(s, u, h.createGroupedDetail, h.detailSeparator, o), i.data("detail_created", !0), e.raise(c.rowDetailUpdated, { row: i, detail: r }), !f) }, e.raise = function (t, i) { var u, r; return e.options.debug === !0 && n.isFunction(e.options.log) && e.options.log(t, "event"), i = i || {}, u = { ft: e }, n.extend(!0, u, i), r = n.Event(t, u), r.ft || n.extend(!0, r, u), n(e.table).trigger(r), r }, e.reset = function () { var t = n(e.table); t.removeData("footable_info").data("breakpoint", "").removeClass(o.loading).removeClass(o.loaded); t.find(h.toggleSelector).unbind(s.toggleRow).unbind("click.footable"); t.find("> tbody > tr").removeClass(o.detailShow); t.find("> tbody > tr." + o.detail).remove(); e.raise(c.reset) }, e.toggleInput = function (t) { var r = n(t).attr("data-bind-name"), i; r != null && (i = n("." + o.detailInnerValue + '[data-bind-value="' + r + '"]'), i != null && (n(t).is(":visible") ? n(i).is(":empty") || n(t).html(n(i).contents().detach()) : n(t).is(":empty") || n(i).html(n(t).contents().detach()))) }, e.init(), e } t.footable = { options: { delay: 100, breakpoints: { phone: 480, tablet: 1024 }, parsers: { alpha: function (t) { return n(t).data("value") || n.trim(n(t).text()) }, numeric: function (t) { var i = n(t).data("value") || n(t).text().replace(/[^0-9.\-]/g, ""); return i = parseFloat(i), isNaN(i) && (i = 0), i } }, addRowToggle: !0, calculateWidthOverride: null, toggleSelector: " > tbody > tr:not(.footable-row-detail)", columnDataSelector: "> thead > tr:last-child > th, > thead > tr:last-child > td", detailSeparator: ":", toggleHTMLElement: "<span />", createGroupedDetail: function (n) { for (var r, i = { _none: { name: null, data: [] } }, t = 0; t < n.length; t++) r = n[t].group, r !== null ? (r in i || (i[r] = { name: n[t].groupName || n[t].group, data: [] }), i[r].data.push(n[t])) : i._none.data.push(n[t]); return i }, createDetail: function (t, i, r, u, f) { var o = r(i), e, s, h; for (e in o) if (o[e].data.length !== 0) for (e !== "_none" && t.append('<div class="' + f.detailInnerGroup + '">' + o[e].name + "<\/div>"), s = 0; s < o[e].data.length; s++) h = o[e].data[s].name ? u : "", t.append(n("<div><\/div>").addClass(f.detailInnerRow).append(n("<div><\/div>").addClass(f.detailInnerName).append(o[e].data[s].name + h)).append(n("<div><\/div>").addClass(f.detailInnerValue).attr("data-bind-value", o[e].data[s].bindName).append(o[e].data[s].display))) }, classes: { main: "footable", loading: "footable-loading", loaded: "footable-loaded", toggle: "footable-toggle", disabled: "footable-disabled", detail: "footable-row-detail", detailCell: "footable-row-detail-cell", detailInner: "footable-row-detail-inner", detailInnerRow: "footable-row-detail-row", detailInnerGroup: "footable-row-detail-group", detailInnerName: "footable-row-detail-name", detailInnerValue: "footable-row-detail-value", detailShow: "footable-detail-show" }, triggers: { initialize: "footable_initialize", resize: "footable_resize", redraw: "footable_redraw", toggleRow: "footable_toggle_row", expandFirstRow: "footable_expand_first_row", expandAll: "footable_expand_all", collapseAll: "footable_collapse_all" }, events: { alreadyInitialized: "footable_already_initialized", initializing: "footable_initializing", initialized: "footable_initialized", resizing: "footable_resizing", resized: "footable_resized", redrawn: "footable_redrawn", breakpoint: "footable_breakpoint", columnData: "footable_column_data", rowDetailUpdating: "footable_row_detail_updating", rowDetailUpdated: "footable_row_detail_updated", rowCollapsed: "footable_row_collapsed", rowExpanded: "footable_row_expanded", rowRemoved: "footable_row_removed", reset: "footable_reset" }, debug: !1, log: null }, version: { major: 0, minor: 5, toString: function () { return t.footable.version.major + "." + t.footable.version.minor }, parse: function (n) { var t = /(\d+)\.?(\d+)?\.?(\d+)?/.exec(n); return { major: parseInt(t[1], 10) || 0, minor: parseInt(t[2], 10) || 0, patch: parseInt(t[3], 10) || 0 } } }, plugins: { _validate: function (i) { if (!n.isFunction(i)) return t.footable.options.debug === !0 && console.error('Validation failed, expected type "function", received type "{0}".', typeof i), !1; var r = new i; return typeof r.name != "string" ? (t.footable.options.debug === !0 && console.error('Validation failed, plugin does not implement a string property called "name".', r), !1) : n.isFunction(r.init) ? (t.footable.options.debug === !0 && console.log('Validation succeeded for plugin "' + r.name + '".', r), !0) : (t.footable.options.debug === !0 && console.error('Validation failed, plugin "' + r.name + '" does not implement a function called "init".', r), !1) }, registered: [], register: function (i, r) { t.footable.plugins._validate(i) && (t.footable.plugins.registered.push(i), typeof r == "object" && n.extend(!0, t.footable.options, r)) }, load: function (n) { for (var r = [], u, i = 0; i < t.footable.plugins.registered.length; i++) try { u = t.footable.plugins.registered[i]; r.push(new u(n)) } catch (f) { t.footable.options.debug === !0 && console.error(f) } return r }, init: function (n) { for (var i = 0; i < n.plugins.length; i++) try { n.plugins[i].init(n) } catch (r) { t.footable.options.debug === !0 && console.error(r) } } } }; var i = 0; n.fn.footable = function (r) { r = r || {}; var f = n.extend(!0, {}, t.footable.options, r); return this.each(function () { i++; var t = new u(this, f, i); n(this).data("footable", t) }) } })(jQuery, window);

/*match height*/
(function (n) { "use strict"; typeof define == "function" && define.amd ? define(["jquery"], n) : typeof module != "undefined" && module.exports ? module.exports = n(require("jquery")) : n(jQuery) })(function (n) { var e = -1, r = -1, i = function (n) { return parseFloat(n) || 0 }, o = function (t) { var f = 1, e = n(t), u = null, r = []; return e.each(function () { var t = n(this), e = t.offset().top - i(t.css("margin-top")), o = r.length > 0 ? r[r.length - 1] : null; o === null ? r.push(t) : Math.floor(Math.abs(u - e)) <= f ? r[r.length - 1] = o.add(t) : r.push(t); u = e }), r }, u = function (t) { var i = { byRow: !0, property: "height", target: null, remove: !1 }; return typeof t == "object" ? n.extend(i, t) : (typeof t == "boolean" ? i.byRow = t : t === "remove" && (i.remove = !0), i) }, t = n.fn.matchHeight = function (i) { var r = u(i), f; return r.remove ? (f = this, this.css(r.property, ""), n.each(t._groups, function (n, t) { t.elements = t.elements.not(f) }), this) : this.length <= 1 && !r.target ? this : (t._groups.push({ elements: this, options: r }), t._apply(this, r), this) }, f; t.version = "master"; t._groups = []; t._throttle = 80; t._maintainScroll = !1; t._beforeUpdate = null; t._afterUpdate = null; t._rows = o; t._parse = i; t._parseOptions = u; t._apply = function (r, f) { var e = u(f), s = n(r), c = [s], l = n(window).scrollTop(), a = n("html").outerHeight(!0), h = s.parents().filter(":hidden"); return h.each(function () { var t = n(this); t.data("style-cache", t.attr("style")) }), h.css("display", "block"), e.byRow && !e.target && (s.each(function () { var i = n(this), t = i.css("display"); t !== "inline-block" && t !== "flex" && t !== "inline-flex" && (t = "block"); i.data("style-cache", i.attr("style")); i.css({ display: t, "padding-top": "0", "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px", overflow: "hidden" }) }), c = o(s), s.each(function () { var t = n(this); t.attr("style", t.data("style-cache") || "") })), n.each(c, function (t, r) { var u = n(r), f = 0; if (e.target) f = e.target.outerHeight(!1); else { if (e.byRow && u.length <= 1) { u.css(e.property, ""); return } u.each(function () { var t = n(this), u = t.attr("style"), i = t.css("display"), r; i !== "inline-block" && i !== "flex" && i !== "inline-flex" && (i = "block"); r = { display: i }; r[e.property] = ""; t.css(r); t.outerHeight(!1) > f && (f = t.outerHeight(!1)); u ? t.attr("style", u) : t.css("display", "") }) } u.each(function () { var t = n(this), r = 0; e.target && t.is(e.target) || (t.css("box-sizing") !== "border-box" && (r += i(t.css("border-top-width")) + i(t.css("border-bottom-width")), r += i(t.css("padding-top")) + i(t.css("padding-bottom"))), t.css(e.property, f - r + "px")) }) }), h.each(function () { var t = n(this); t.attr("style", t.data("style-cache") || null) }), t._maintainScroll && n(window).scrollTop(l / a * n("html").outerHeight(!0)), this }; t._applyDataApi = function () { var t = {}; n("[data-match-height], [data-mh]").each(function () { var i = n(this), r = i.attr("data-mh") || i.attr("data-match-height"); t[r] = r in t ? t[r].add(i) : i }); n.each(t, function () { this.matchHeight(!0) }) }; f = function (i) { t._beforeUpdate && t._beforeUpdate(i, t._groups); n.each(t._groups, function () { t._apply(this.elements, this.options) }); t._afterUpdate && t._afterUpdate(i, t._groups) }; t._update = function (i, u) { if (u && u.type === "resize") { var o = n(window).width(); if (o === e) return; e = o } i ? r === -1 && (r = setTimeout(function () { f(u); r = -1 }, t._throttle)) : f(u) }; n(t._applyDataApi); n(window).bind("load", function (n) { t._update(!1, n) }); n(window).bind("resize orientationchange", function (n) { t._update(!0, n) }) });
