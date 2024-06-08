/** @type {import('next').NextConfig} */


const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    // webpack: (
    //     config,
    //     { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    //   ) => {
    //     // Important: return the modified config
    //     config.plugins.push(
    //         new webpack.ProvidePlugin({
    //           $: 'jquery',
    //           jQuery: 'jquery',
    //           'window.jQuery': 'jquery',
    //           // Add more plugins as needed
    //         })
    //       )
    //     return config
    //   },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
         new webpack.ProvidePlugin({
         $: 'jquery',
         jQuery: 'jquery',
         'window.jQuery': 'jquery',
      }));
     return config;
    }
};

export default nextConfig;
