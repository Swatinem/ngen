JS_FILES := $(shell find lib/ -name "*.js")
# lib/templates.js
JADE_FILES := $(shell find templates/ -name "*.jade")
STYLUS_FILES := $(shell find stylus/ -name "*.styl")

all: deploy/index.html deploy/index.css deploy/index.js
# lint

deploy/index.html: index.jade
	./node_modules/.bin/jade --pretty --out deploy index.jade

deploy/index.css: $(STYLUS_FILES)
	./node_modules/.bin/stylus --include-css --out deploy stylus/index.styl

deploy/index.js: components $(JS_FILES)
	@./node_modules/.bin/component build --use component-jade --out deploy --name index

components: component.json
	@./node_modules/.bin/component install --dev
	touch components

#lib/templates.js: $(JADE_FILES)
#	node compilejade.js --output $@ --base templates/ $^

clean: clean-cov
	rm -rf components deploy

#lint: .lint
#.lint: $(filter-out lib/templates.js,$(JS_FILES))
#	-@./node_modules/.bin/jshint $^ && touch .lint
#	@NODE_ENV=test ./node_modules/.bin/mocha > /dev/null

test:
	NODE_ENV=test ./node_modules/.bin/mocha

lib-cov: clean-cov
	./node_modules/.bin/jscoverage lib lib-cov

clean-cov:
	rm -rf lib-cov

test-cov: lib-cov
	NODE_ENV=test ./node_modules/.bin/mocha --harmony --reporter html-cov 1> coverage.html

.PHONY: all clean lint test test-cov clean-cov
