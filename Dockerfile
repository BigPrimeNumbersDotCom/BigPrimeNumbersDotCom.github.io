# Build:
# docker build -t ace3mod/jekyll .
#
# Run:
# docker run -it ace3mod/jekyll

FROM jekyll/jekyll:pages
# MAINTAINER bux
RUN apk --update add \
gcc \
build-base \
ruby-dev \
libc-dev \
linux-headers \
libffi-dev \
libxml2-dev \
libxslt-dev
# postgresql-dev

COPY . /srv/jekyll
RUN gem install bundler
# COPY Gemfile* /tmp/
# WORKDIR /tmp

# RUN bundle config build.nokogiri --use-system-libraries
RUN bundle install
WORKDIR /srv/jekyll
ENTRYPOINT ["bundle", "exec", "jekyll", "serve", "--future", "--incremental", "--config", "_config.yml"]
HEALTHCHECK --intervals=5s --timeout=2s CMD npm run health

# warm orange #ec971f ?? #f0ad4e
# 34,34,34, 48,48,48
