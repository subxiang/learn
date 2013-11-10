package com.darkart.ajax;

import java.io.IOException;

import javax.servlet.*;
import javax.servlet.http.*;

public class AjaxResponseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		String key = req.getParameter("key");
		String decimal;
		if (key != null) {
			int keycode = key.charAt(0);
			decimal = Integer.toString(keycode);
		} else {
			decimal = "?";
		}
		res.setContentType("text/html");
		res.setHeader("Cache-Control", "no-cache");
		res.getWriter().write(decimal);
	}
}
