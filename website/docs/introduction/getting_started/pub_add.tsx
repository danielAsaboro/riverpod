export function buildDeps({
  deps = [],
  devDeps = [],
}: {
  deps?: string[];
  devDeps?: string[];
}) {
  var result = "flutter pub add";
  for (const dep of deps) {
    result += ` \\\n  ${dep}`;
  }

  for (const dep of [...devDeps, "custom_lint", "riverpod_lint"]) {
    result += ` \\\n  dev:${dep}`;
  }

  return result;
}

const raw = buildDeps({ deps: ["flutter_riverpod"] });

const codegen = buildDeps({
  deps: ["flutter_riverpod", "riverpod_annotation"],
  devDeps: ["riverpod_generator", "build_runner"],
});

const hooks = buildDeps({ deps: ["hooks_riverpod", "flutter_hooks"] });

const hooksCodegen = buildDeps({
  deps: ["hooks_riverpod", "flutter_hooks", "riverpod_annotation"],
  devDeps: ["riverpod_generator", "build_runner"],
});

export default {
  raw: raw,
  hooks: hooks,
  codegen: codegen,
  hooksCodegen: hooksCodegen,
};
