package com.projunifil.adoteumpeludo.util;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.web.util.UriComponentsBuilder;

public class PaginationUtil {

    public static HttpHeaders generatePaginationHeaders(Page<?> page, UriComponentsBuilder uriBuilder) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", Long.toString(page.getTotalElements()));

        String uri = uriBuilder.toUriString();
        int pageNumber = page.getNumber();
        int pageSize = page.getSize();

        // First page
        headers.add("Link", "<" + buildPageUri(uri, 0, pageSize) + ">; rel=\"first\"");
        
        // Previous page
        if (page.hasPrevious()) {
            headers.add("Link", "<" + buildPageUri(uri, pageNumber - 1, pageSize) + ">; rel=\"prev\"");
        }
        
        // Next page
        if (page.hasNext()) {
            headers.add("Link", "<" + buildPageUri(uri, pageNumber + 1, pageSize) + ">; rel=\"next\"");
        }
        
        // Last page
        headers.add("Link", "<" + buildPageUri(uri, page.getTotalPages() - 1, pageSize) + ">; rel=\"last\"");

        return headers;
    }

    private static String buildPageUri(String uri, int page, int size) {
        return UriComponentsBuilder.fromUriString(uri)
                .replaceQueryParam("page", page)
                .replaceQueryParam("size", size)
                .toUriString();
    }
}