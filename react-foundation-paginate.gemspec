# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'react/foundation/paginate/version'

Gem::Specification.new do |spec|
  spec.name          = "react-foundation-paginate"
  spec.version       = React::Foundation::Paginate::VERSION
  spec.authors       = ["Romel Campos"]
  spec.email         = ["rcoolah@gmail.com"]
  spec.summary       = "A pagination library for react+foundation"
  spec.homepage      = "https://github.com/devrc-trise/react-foundation-paginate"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.7"
  spec.add_development_dependency "rake", "~> 10.0"
end
